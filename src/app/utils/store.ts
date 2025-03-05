import { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { filterParameters } from "../constants/filterData";
import { fetchApartments } from "../lib/actions";
import { Apartment, getApartmentFromModel } from "../types/apartment";
import { filterApartments } from "./filter";
import { FilterParameters } from "../types/filterParameters";

interface AppState {
  isLoadingApartments: boolean;
  fetchApartments: () => void;
  apartments: Apartment[];
  filteredApartments: Apartment[];
  availableFloors: number[];
  availableFilteredFloors: number[];
  availableFloorApartments: Apartment[];

  // Current state
  currentFloor?: number;
  setCurrentFloor: (value?: number) => void;
  currentApartment?: number;
  setCurrentApartment: (value?: number) => void;

  // Hover state for dropdowns in landscape mode
  currentHoverFloor?: number;
  setCurrentHoverFloor: (value?: number) => void;
  currentHoverApartment?: number;
  setCurrentHoverApartment: (value?: number) => void;

  // Selected state for horizontal selectors in portrait mode
  currentSelectedFloor?: number;
  setCurrentSelectedFloor: (value?: number) => void;
  currentSelectedApartment?: number;
  setCurrentSelectedApartment: (value?: number) => void;

  apartmentInfoCardOpened: boolean;
  setApartmentInfoCardOpened: (value: boolean) => void;

  apartmentInterestCardOpened: boolean;
  setApartmentInterestCardOpened: (value: boolean) => void;

  // Filter
  filter: {
    parameters: FilterParameters;
    isFilterDialogOpened: boolean;
    toggleFilterDialog: () => void;
    isFilterBottomModalOpened: boolean;
    toggleFilterBottomModal: () => void;
    clearFilters: () => void;
    isFilterApplied: boolean;
    selectedViews: string[];
    handleViewsChange: (viewValue: string) => void;
    selectedNoOfBedrooms: number[];
    handleNoOfBedroomsChange: (bedroomTypeId: number) => void;
    areaRange: [number, number];
    setAreaRange: (filter: [number, number]) => void;
    priceRange: [number, number];
    setPriceRange: (filter: [number, number]) => void;
  };

  // Zoom controls
  zoomControls: {
    zoomableElementRef: ReactZoomPanPinchContentRef | null;
    setZoomableElementRef: (ref: ReactZoomPanPinchContentRef | null) => void;
    zoomIn: () => void;
    zoomOut: () => void;
  };
}

const useStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        apartmentInterestCardOpened: true,
        setApartmentInterestCardOpened: (value) => {
          set((state) => ({
            ...state,
            apartmentInterestCardOpened: value,
            // currentHoverApartment: value
            //   ? state.currentHoverApartment
            //   : undefined,
          }));
        },

        apartmentInfoCardOpened: false,
        setApartmentInfoCardOpened: (value) => {
          set((state) => ({
            ...state,
            apartmentInfoCardOpened: value,
            currentHoverApartment: value
              ? state.currentHoverApartment
              : undefined,
          }));
        },

        filter: {
          isFilterApplied: false,
          parameters: filterParameters,
          isFilterDialogOpened: true,
          toggleFilterDialog: () => {
            set((state) => ({
              filter: {
                ...state.filter,
                isFilterDialogOpened: !state.filter.isFilterDialogOpened,
              },
            }));
          },
          isFilterBottomModalOpened: false,
          toggleFilterBottomModal: () => {
            set((state) => ({
              filter: {
                ...state.filter,
                isFilterBottomModalOpened:
                  !state.filter.isFilterBottomModalOpened,
              },
            }));
          },
          clearFilters: () => {
            set((state) => ({
              filter: {
                ...state.filter,
                isFilterApplied: false,
                selectedViews: [],
                selectedNoOfBedrooms: [],
                priceRange: [
                  state.filter.parameters.priceMin,
                  state.filter.parameters.priceMax,
                ],
                areaRange: [
                  state.filter.parameters.areaMin,
                  state.filter.parameters.areaMax,
                ],
              },
              filteredApartments: state.apartments,
              availableFilteredFloors: state.availableFloors,
            }));
          },
          selectedViews: [],
          selectedNoOfBedrooms: [],
          handleNoOfBedroomsChange: (bedroomTypeId) => {
            set((state) => {
              const updatedNoOfBedrooms =
                state.filter.selectedNoOfBedrooms.includes(bedroomTypeId)
                  ? state.filter.selectedNoOfBedrooms.filter(
                      (existingTypeId) => existingTypeId !== bedroomTypeId
                    )
                  : [...state.filter.selectedNoOfBedrooms, bedroomTypeId];
              const updatedFilter = {
                ...state.filter,
                isFilterApplied: true,
                selectedNoOfBedrooms: updatedNoOfBedrooms,
              };
              const { filteredApartments, filteredFloors } = filterApartments(
                updatedFilter,
                state.apartments
              );
              return {
                filter: updatedFilter,
                filteredApartments,
                availableFilteredFloors: filteredFloors,
              };
            });
          },
          handleViewsChange: (viewValue) => {
            set((state) => {
              const updatedViews = state.filter.selectedViews.includes(
                viewValue
              )
                ? state.filter.selectedViews.filter(
                    (existingViewId) => existingViewId !== viewValue
                  )
                : [...state.filter.selectedViews, viewValue];
              const updatedFilter = {
                ...state.filter,
                isFilterApplied: true,

                selectedViews: updatedViews,
              };
              const { filteredApartments, filteredFloors } = filterApartments(
                updatedFilter,
                state.apartments
              );
              return {
                filter: updatedFilter,
                filteredApartments,
                availableFilteredFloors: filteredFloors,
              };
            });
          },
          priceRange: [filterParameters.priceMin, filterParameters.priceMax],
          setPriceRange: (updatedPriceRange) => {
            set((state) => {
              const updatedFilter = {
                ...state.filter,
                isFilterApplied: true,

                priceRange: updatedPriceRange,
              };
              const { filteredApartments, filteredFloors } = filterApartments(
                updatedFilter,
                state.apartments
              );
              return {
                filter: updatedFilter,
                filteredApartments,
                availableFilteredFloors: filteredFloors,
              };
            });
          },
          areaRange: [filterParameters.areaMin, filterParameters.areaMax],
          setAreaRange: (updatedAreaRange) => {
            set((state) => {
              const updatedFilter = {
                ...state.filter,
                isFilterApplied: true,

                areaRange: updatedAreaRange,
              };
              const { filteredApartments, filteredFloors } = filterApartments(
                updatedFilter,
                state.apartments
              );

              return {
                filter: updatedFilter,
                filteredApartments,
                availableFilteredFloors: filteredFloors,
              };
            });
          },
        },

        setCurrentHoverFloor: (value) => {
          set({ currentHoverFloor: value });
        },
        setCurrentHoverApartment: (value) => {
          set({ currentHoverApartment: value });
        },

        setCurrentSelectedFloor: (value) => {
          set({ currentSelectedFloor: value });
        },
        setCurrentSelectedApartment: (value) => {
          set({ currentSelectedApartment: value });
        },

        setCurrentFloor: (value) => {
          set((state) => {
            const availableApartmentsOnFloor = state.apartments.filter(
              (apartment) =>
                apartment.floor == value &&
                apartment.availability === "available"
            );

            return {
              availableFloorApartments: availableApartmentsOnFloor,
              currentFloor: value,
              currentApartment: undefined,
            };
          });
        },
        setCurrentApartment: (value) => {
          set({ currentApartment: value });
        },

        zoomControls: {
          zoomableElementRef: null,
          setZoomableElementRef: (ref) => {
            set((state) => ({
              zoomControls: { ...state.zoomControls, zoomableElementRef: ref },
            }));
          },
          zoomIn: () => {
            get().zoomControls.zoomableElementRef?.zoomIn();
          },
          zoomOut: () => {
            get().zoomControls.zoomableElementRef?.zoomOut();
          },
        },

        apartments: [],
        availableFloors: [],
        availableFilteredFloors: [],
        filteredApartments: [],
        availableFloorApartments: [],
        isLoadingApartments: false,
        fetchApartments: async () => {
          const store = get();
          store.isLoadingApartments = true;
          const apartmentsData = await fetchApartments();
          store.isLoadingApartments = false;
          const availableFloors: number[] = [];
          let priceMin = Infinity,
            priceMax = 0,
            areaMin = Infinity,
            areaMax = 0;

          const apartments: Apartment[] = apartmentsData!.map((apartmentData) =>
            getApartmentFromModel(apartmentData)
          );

          const availableViews = new Set<string>();
          const availablePropertyTypes = new Set<number>();

          apartments.forEach((apartment) => {
            if (
              apartment.availability === "available" &&
              !availableFloors.includes(apartment.floor)
            ) {
              availableFloors.push(apartment.floor);
            }

            if (apartment.availability === "available") {
              apartment.views.forEach((view) => availableViews.add(view));
              availablePropertyTypes.add(apartment.numberOfRooms);
            }
            priceMin = Math.min(priceMin, apartment.price);
            priceMax = Math.max(priceMax, apartment.price);
            areaMin = Math.min(areaMin, apartment.area);
            areaMax = Math.max(areaMax, apartment.area);
          });

          areaMin = Math.floor(areaMin);
          areaMax = Math.ceil(areaMax);
          priceMin = Math.floor(priceMin);
          priceMax = Math.ceil(priceMax);

          availableFloors.sort((a, b) => a - b);

          const views = get().filter.parameters.views.map((view) => ({
            ...view,
            enabled: availableViews.has(view.value),
          }));

          const propertyTypes = get().filter.parameters.propertyTypes.map(
            (type) => ({
              ...type,
              enabled: availablePropertyTypes.has(type.value),
            })
          );

          set((state) => {
            return {
              apartments,
              availableFloors,
              availableFilteredFloors: availableFloors,
              filteredApartments: apartments,
              filter: {
                ...state.filter,
                parameters: {
                  ...state.filter.parameters,
                  propertyTypes,
                  views,
                  areaMin,
                  areaMax,
                  priceMin,
                  priceMax,
                },
                areaRange: [areaMin, areaMax],
                priceRange: [priceMin, priceMax],
              },
            };
          });
        },
      }),
      {
        name: "app-storage",
        partialize: (state) => ({
          isFilterDialogOpened: state.filter.isFilterDialogOpened,
        }),
      }
    )
  )
);

export default useStore;

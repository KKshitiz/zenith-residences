import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type ModalStore = {
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;

  publicArea: {
    isCarouselOpened: boolean;
    setCarouselOpened: (value: boolean) => void;
  };

  videoTour: {
    isWindowOpened: boolean;
    setWindowOpened: (value: boolean) => void;
  };

  apartmentInfoBottomModalOpen: boolean;
  setApartmentInfoBottomModalOpen: (value: boolean) => void;

  builderInfoDialogOpen: boolean;
  setBuilderInfoDialogOpen: (value: boolean) => void;

  zoomInstructionsRead: boolean;
  setZoomInstructionsRead: (value: boolean) => void;
};

export const useModalStore = create<ModalStore>()(
  devtools(
    persist(
      (set) => ({
        builderInfoDialogOpen: true,
        setBuilderInfoDialogOpen: (value) => {
          set({ builderInfoDialogOpen: value });
        },

        hasHydrated: false,
        setHasHydrated: (state) => {
          set({
            hasHydrated: state,
          });
        },

        zoomInstructionsRead: false,
        setZoomInstructionsRead: (value) => {
          set(() => ({
            zoomInstructionsRead: value,
          }));
        },

        videoTour: {
          isWindowOpened: false,
          setWindowOpened: (value) => {
            set((state) => ({
              videoTour: {
                ...state.videoTour,
                isWindowOpened: value,
              },
            }));
          },
        },

        publicArea: {
          isCarouselOpened: false,
          setCarouselOpened: (value) => {
            set((state) => ({
              publicArea: {
                ...state.publicArea,
                isCarouselOpened: value,
              },
            }));
          },
        },

        apartmentInfoBottomModalOpen: false,
        setApartmentInfoBottomModalOpen: (value) => {
          set({ apartmentInfoBottomModalOpen: value });
        },
      }),
      {
        name: "modals",
        partialize: (state) => ({
          zoomInstructionsRead: state.zoomInstructionsRead,
        }),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      }
    )
  )
);

export const useHydration = () => useModalStore((state) => state.hasHydrated);

// import React from 'react';
// import {
//   Scene,
//   BookWrapper,
//   BookInner,
//   StackLayer,
//   Page,
//   PageContent,
//   PageHeader,
//   ChapterLabel,
//   PageNumber,
//   Spine,
//   Vignette,
//   ScorchCorner,
// } from './bookpage/styles/BookPage.styles';
// import TornEdgeSVG from './bookpage/ToenEdgeSVG';

// interface BookPageShellProps {
//   pageNumber: string;
//   chapterLabel?: string;
//   tearVariant?: 0 | 1;
//   sceneColor?: string;
//   children: React.ReactNode;
// }

// const BookPageShell: React.FC<BookPageShellProps> = ({
//   pageNumber,
//   chapterLabel = 'Portfolio',
//   tearVariant = 0,
//   sceneColor = '#1a1612',
//   children,
// }) => {
//   return (
//     <Scene>
//       <BookWrapper>
//         <BookInner>
//           <StackLayer depth={3} />
//           <StackLayer depth={2} />
//           <StackLayer depth={1} />

//           <Page>
//             <Spine />
//             <Vignette />
//             <ScorchCorner corner="tl" />
//             <ScorchCorner corner="br" />

//             <TornEdgeSVG
//               position="top"
//               variant={tearVariant}
//               maskColor={sceneColor}
//             />
//             <TornEdgeSVG
//               position="bottom"
//               variant={tearVariant}
//               maskColor={sceneColor}
//             />

//             <PageContent>
//               <PageHeader>
//                 <ChapterLabel>{chapterLabel}</ChapterLabel>
//                 <PageNumber>— {pageNumber} —</PageNumber>
//               </PageHeader>

//               {children}
//             </PageContent>
//           </Page>
//         </BookInner>
//       </BookWrapper>
//     </Scene>
//   );
// };

// export { BookPageShell };
// export type { BookPageShellProps };

import React from 'react';
import {
  Scene,
  BookWrapper,
  BookInner,
  StackLayer,
  Page,
  PageContent,
  PageHeader,
  ChapterLabel,
  PageNumber,
  Spine,
  Vignette,
  ScorchCorner,
} from './bookpage/styles/BookPage.styles';
import TornEdgeSVG from './bookpage/ToenEdgeSVG';

interface BookPageShellProps {
  pageNumber: string;
  chapterLabel?: string;
  tearVariant?: 0 | 1;
  children: React.ReactNode;
}

const BookPageShell: React.FC<BookPageShellProps> = ({
  pageNumber,
  chapterLabel = 'Portfolio',
  tearVariant = 0,
  children,
}) => {
  return (
    <Scene>
      <BookWrapper>
        <BookInner>
          <StackLayer depth={3} />
          <StackLayer depth={2} />
          <StackLayer depth={1} />

          <Page>
            <Spine />
            <Vignette />
            <ScorchCorner corner="tl" />
            <ScorchCorner corner="br" />

            <TornEdgeSVG position="top" variant={tearVariant} />
            <TornEdgeSVG position="bottom" variant={tearVariant} />

            <PageContent>
              <PageHeader>
                <ChapterLabel>{chapterLabel}</ChapterLabel>
                <PageNumber>— {pageNumber} —</PageNumber>
              </PageHeader>

              {children}
            </PageContent>
          </Page>
        </BookInner>
      </BookWrapper>
    </Scene>
  );
};

export { BookPageShell };
export type { BookPageShellProps };
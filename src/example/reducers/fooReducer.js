import { List as iList } from 'immutable';

const initialState = iList([1, 2, 3, 4]);

// test start
const testState = {
  thisPage: 3,
  chapterList: [
    {
      allowPages: 4,
      sectionList: [
        {
          title: '某某小节标题',
          range: [1, 1],
        },
        {
          title: '某某小节标题',
          range: [2, 5],
        },
        {
          title: '某某小节标题',
          range: [6, 10],
        },
        {
          title: '某某小节标题',
          range: [11, 12],
        },
      ],
      pageList: [
        {
          type: 1,
          isRead: true, // 是否已看
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: true,
        },
        {
          type: 1,
          isRead: true,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
      ],
    },
  ],
};

// console.log(testState);

testState.chapterList.map((itemC) => {
  itemC.sectionList.map((itemS, iS) => {
    if (itemS.range[0] < itemC.allowPages) {
      // console.log(`${iS} 可看`);
      let isRead = false;
      let isOver = true;
      for (let i = itemS.range[0]; i - 1 < itemS.range[1]; i += 1) {
        if (itemC.pageList[i].isRead) isRead = true;
        else isOver = false;
      }

      if (isRead) {
        // console.log(`${iS} 有看`);
        if (isOver) {
          console.log(`${iS} 看完`);
        } else {
          console.log(`${iS} 未完`);
        }

        if (itemS.range[0] <= testState.thisPage && testState.thisPage <= itemS.range[1]) {
          console.log(`${iS} 正看`);
        }
      } else {
        console.log(`${iS} 没看`);
      }
    } else {
      console.log(`${iS} 禁看`);
    }
  });
});

// test end

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;

class DataTest {
  private ListItems = [
    {
      id: '1',
      image: 'https://picsum.photos/id/1/200/200',
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/2/200/200',
      title: 'Title 2',
      description: 'Description 2',
    },
  ];

  private ListCategories = [
    {
      id: '1',
      image: 'https://picsum.photos/id/1/200/200',
      title: 'Title 1',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/2/200/200',
      title: 'Title 2',
    },
    {
      id: '3',
      image: 'https://picsum.photos/id/3/200/200',
      title: 'Title 3',
    },
  ];

  getData() {
    return this.ListItems;
  }

  getCategories() {
    return this.ListCategories;
  }
}

export default new DataTest();

export const formatDuration = (ms: number) => {
  try {
    const date = new Date(0);
    date.setMilliseconds(ms);
    const time = date.toISOString().slice(11, 19);
    const result = time.startsWith('00:0')
      ? time.slice(4)
      : time.startsWith('00')
      ? time.slice(3)
      : time.length === 8 && time.startsWith('0')
      ? time.slice(1)
      : time;
    return result;
  } catch (error) {
    return '0:00';
  }
};

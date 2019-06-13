import graphs from '../graphs';

test('test graph function', async () => {
    let test_graph = [
        '<div style="width: 100%; height:400px;" id="my-graph"></div>',
    ].join('');
    expect(graphs()).toBe(test_graph);
})

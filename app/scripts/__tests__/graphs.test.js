import graphs from '../graphs';

test('test graph function', async () => {
    let test_graph = '<div style="width:600px; height:400px;" id="my-graph"></div>';
    expect(graphs()).toBe(test_graph);
})

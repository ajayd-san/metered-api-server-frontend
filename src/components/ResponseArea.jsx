
function Response({response}) {
    return (<>
    <pre>{JSON.stringify(response, null, 2)}</pre>
    </>);
}

export default Response;
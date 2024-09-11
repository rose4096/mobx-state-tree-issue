export async function GET() {
    return Response.json({
        users: [
            {name: 'Gerald 1', age: 999},
            {name: 'Gerald 2', age: 2},
            {name: 'Gerald 3', age: 999},
            {name: 'Gerald 4', age: 999},
            {name: 'Gerald 5', age: 999},
            {name: 'Gerald 6', age: 7},
            {name: 'Gerald 7', age: 999},
            {name: 'Gerald 8', age: 999},
            {name: 'Gerald 9', age: 34},
            {name: 'Gerald 10', age: 999},
        ]
    })
}
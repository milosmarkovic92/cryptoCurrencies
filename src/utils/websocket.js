import WebSocketClient from 'websocket';

const subscribeToSymbol = (ws, symbol) => {
    const subscribeMessage = {
        event: 'subscribe',
        channel: 'ticker',
        symbol: `t${symbol.toUpperCase()}`,
        pair: symbol.toUpperCase()
    };

    ws.send(JSON.stringify(subscribeMessage));
};

export const connectWebSocket = (symbols, onDataUpdate) => {
    const ws = new WebSocketClient.w3cwebsocket('wss://api-pub.bitfinex.com/ws/2');

    ws.onopen = () => {
        console.log('WebSocket connection opened.');

        symbols.forEach((symbol) => {
            subscribeToSymbol(ws, symbol);
        });
    };

    ws.onmessage = (message) => {
        const data = JSON.parse(message.data);
        if (data[1] === 'hb') {
            return;
        }

        if (Array.isArray(data) && data.length > 1) {
            onDataUpdate(data);
        }
    };

    ws.onclose = () => {
        console.log('WebSocket connection closed.');
    };

    return ws;
};
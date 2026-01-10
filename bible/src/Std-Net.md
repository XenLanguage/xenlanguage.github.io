# xen::net

Provides utitlies for networking and web services.

```makefile
include net;
```

## Public Classes

### TcpStream

Provides facilities for communicating with a `TcpListener` session. Typically created and returned by accepted TCP connections via `TcpListener`.

```ts
var conn = new net.TcpStream(remote_addr, remote_port);
```

#### Public Properties

- **remote_addr**: `number` - The remote IPv4 address of the remote host the stream is currently connected to
- **remote_port**: `number` - The port of the remote host the stream is currently connected through

#### Private Properties

- **_fd**: `number` - Socket file descriptor for current connection

#### Public Methods

**read**
```ts
read (max_bytes = 4096) -> string | null
```
Read up to `max_bytes` from stream.

**write**
```ts
write (data) -> number
```
Write `data` to stream.

**send**
```ts
send (data) -> number
```
Alias for `write`.

**recv**
```ts
recv (max_bytes = 4096) -> string | null
```
Alias for `read`.

**close**
```ts
close () -> null
```
Close the connection.

**shutdown**
```ts
shutdown (method: number) -> null
```
Shutdown the connection. The method can be one of three values:
- `0`: read
- `1`: write
- `2`: both

### TcpListener

Binds a specified port and listens to incoming TCP connections on that port. Can receive a `TcpStream` instance from connections, allowing the ability to read and write data between the host (TcpListener) and client (TcpStream).

```ts
var listener = new net.TcpListener(port);
```

#### Public Properties

- **port**: `number` - The port to bind to

#### Private Properties

- **_socket**: `number` - The bound socket file descriptor

#### Public Methods

**bind**
```ts
bind () -> bool
```
Bind the socket to the instance port.

**listen**
```ts
listen () -> bool
```
Begin listening to incoming traffic.

**bind_and_listen**
```ts
bind_and_listen () -> bool
```
Combines the previous two methods into one.

**accept**
```ts
accept () -> TcpStream | null
```
Waits on incoming connections and accepts the first one, returning a TcpStream instance.

**close**
```ts
close () -> null
```
Closes the connection, terminating any active connections with clients.
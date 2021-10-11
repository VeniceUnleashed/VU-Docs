---
title: VoipEmitter:Emitting
---

> **VoipEmitter:Emitting**(emitter: [VoipEmitter](/vext/ref/client/type/voipemitter), isEmitting: bool)

The `isEmitting` state of a [VoipEmitter](/vext/ref/client/type/voipemitter) has changed.

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **emitter** | [VoipEmitter](/vext/ref/client/type/voipemitter) |  |
| **isEmitting** | bool |  |

## Example

```lua
Events:Subscribe('VoipEmitter:Emitting', function(emitter, isEmitting)
    -- Do stuff here.
end)
```

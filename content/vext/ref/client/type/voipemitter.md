---
title: VoipEmitter
---

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "player" true >}} | [Player](/vext/ref/client/type/player) |
| {{< prop "channel" true >}} | [VoipChannel](/vext/ref/client/type/voipchannel) |
| {{< prop "isEmitting" true >}} | bool |
| {{< prop "emitterType" >}} | [VoipEmitterType](/vext/ref/shared/type/voipemittertype) |
| {{< prop "volume" >}} | float |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "boundToBone" >}} | int \| nil |
| {{< prop "leftBalance" >}} | float |
| {{< prop "rightBalance" >}} | float |
| {{< prop "maxDistance" >}} | float |
| {{< prop "muted" >}} | bool |

## Properties

### {{% prop-heading "player" true %}}

> **[Player](/vext/ref/client/type/player)**

The player this emitter is bound to.

### {{% prop-heading "channel" true %}}

> **[VoipChannel](/vext/ref/client/type/voipchannel)**

The VoIP channel this emitter belongs to.

### {{% prop-heading "isEmitting" true %}}

> **bool**

Will be `true` if this emitter is currently emitting sound.

### {{% prop-heading "emitterType" %}}

> **[VoipEmitterType](/vext/ref/shared/type/voipemittertype)**

The type of the emitter. Will default to the channel's `defaultEmitterType` but can be overriden on the fly.

### {{% prop-heading "volume" %}}

> **float**

The volume of the emitter, from `0.0` to `1.0`. Defaults to `1.0`.

### {{% prop-heading "position" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

The position of the emitter in 3D space. This is only relevant for `Positional` emitters.

### {{% prop-heading "boundToBone" %}}

> **int** \| **nil**

The [SoldierEntity](/vext/ref/client/type/soldierentity) bone to bind this emitter to, or `nil` if it should not be bound to anything. When this is set to a valid value, the engine will automatically update the position of the emitter to match the position of the specified bone.

### {{% prop-heading "leftBalance" %}}

> **float**

The audio balance / volume for the left channel, from `0.0` to `1.0`. This defaults to `1.0` and only has effect on `Local` emitters.

### {{% prop-heading "rightBalance" %}}

> **float**

The audio balance / volume for the right channel, from `0.0` to `1.0`. This defaults to `1.0` and only has effect on `Local` emitters.

### {{% prop-heading "maxDistance" %}}

> **float**

The maximum distance (in in-game units) that audio will be audible from for `Positional` emitters. The audio will be linearly faded based on the emitter's distance to the current player.

### {{% prop-heading "muted" %}}

> **bool**

Whether this emitter should be muted or not. When set to `true`, the emitter will stop producing sound.


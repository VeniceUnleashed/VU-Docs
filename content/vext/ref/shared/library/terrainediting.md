---
title: TerrainEditing
---

Provides support for editing terrain heights at runtime. This API is experimental and may change in future releases. Edits only affect the process that applies them and are not synced between the server and clients. Applied edits persist across level loads and get re-applied to the new level's terrain; call RevertAll on level transitions if this is not desired.

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[ApplyHeightEdit](#applyheightedit)**(worldX: float, worldZ: float, radius: float, heightDelta: float) | int |
| **[RevertEdit](#revertedit)**(editId: int) | bool |
| **[RevertAll](#revertall)**() | void |

## Methods

### ApplyHeightEdit {#applyheightedit}

> **ApplyHeightEdit**(worldX: float, worldZ: float, radius: float, heightDelta: float): int

Raises or lowers the terrain in a circular area. The full height delta is applied at the center of the area and falls off smoothly towards its edge. Overlapping edits are combined additively. Edits are not validated; an edit that does not change any terrain (for example, one outside the terrain bounds) is still stored and returns a valid identifier.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **worldX** | float | The X coordinate of the center of the edit, in world space. |
| **worldZ** | float | The Z coordinate of the center of the edit, in world space. |
| **radius** | float | The radius of the edited area. |
| **heightDelta** | float | The amount to raise (positive) or lower (negative) the terrain by. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** | An identifier for the applied edit which can be passed to RevertEdit, or `-1` if the terrain editing system is unavailable. |

### RevertEdit {#revertedit}

> **RevertEdit**(editId: int): bool

Reverts a previously applied terrain edit.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **editId** | int | The identifier returned by ApplyHeightEdit. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** | `true` if the edit was found and reverted, `false` otherwise. |

### RevertAll {#revertall}

> **RevertAll**()

Reverts all applied terrain edits.


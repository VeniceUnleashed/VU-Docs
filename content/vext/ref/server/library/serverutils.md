---
title: ServerUtils
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[SetCustomMapName](#setcustommapname)**(name: string) | void |
| **[GetCustomMapName](#getcustommapname)**() | string \| nil |
| **[ClearCustomMapName](#clearcustommapname)**() | void |
| **[SetCustomGameModeName](#setcustomgamemodename)**(name: string) | void |
| **[GetCustomGameModeName](#getcustomgamemodename)**() | string \| nil |
| **[ClearCustomGameModeName](#clearcustomgamemodename)**() | void |

## Methods

### SetCustomMapName {#setcustommapname}

> **SetCustomMapName**(name: string)

Sets a custom map name to show in the server browser.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string | The custom map name. |

### GetCustomMapName {#getcustommapname}

> **GetCustomMapName**(): string \| nil

Gets the custom map name shown in the server browser, or `nil` if one is not set.

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** \| **nil** | The custom map name, or `nil` if not is not set. |

### ClearCustomMapName {#clearcustommapname}

> **ClearCustomMapName**()

Clears any custom map names and reverts to showing the real map name in the server browser.

### SetCustomGameModeName {#setcustomgamemodename}

> **SetCustomGameModeName**(name: string)

Sets a custom game mode name to show in the server browser.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string | The custom game mode name. |

### GetCustomGameModeName {#getcustomgamemodename}

> **GetCustomGameModeName**(): string \| nil

Gets the custom game mode name shown in the server browser, or `nil` if one is not set.

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** \| **nil** | The custom game mode name, or `nil` if not is not set. |

### ClearCustomGameModeName {#clearcustomgamemodename}

> **ClearCustomGameModeName**()

Clears any custom game mode names and reverts to showing the real game mode name in the server browser.


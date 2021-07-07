---
title: Player
---

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" true >}} | string |
| {{< prop "id" true >}} | int |
| {{< prop "onlineId" true >}} | int |
| {{< prop "teamId" true >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "squadId" true >}} | [SquadId](/vext/ref/fb/squadid) |
| {{< prop "inVehicle" true >}} | bool |
| {{< prop "soldier" true >}} | [SoldierEntity](/vext/ref/client/type/soldierentity) \| nil |
| {{< prop "corpse" true >}} | [SoldierEntity](/vext/ref/client/type/soldierentity) \| nil |
| {{< prop "attachedControllable" true >}} | [ControllableEntity](/vext/ref/client/type/controllableentity) \| nil |
| {{< prop "controlledControllable" true >}} | [ControllableEntity](/vext/ref/client/type/controllableentity) \| nil |
| {{< prop "isSquadLeader" true >}} | bool |
| {{< prop "alive" true >}} | bool |
| {{< prop "kills" true >}} | int |
| {{< prop "deaths" true >}} | int |
| {{< prop "time" true >}} | float |
| {{< prop "score" true >}} | int |
| {{< prop "input" true >}} | [EntryInput](/vext/ref/shared/type/entryinput) \| nil |
| {{< prop "controlledEntryId" true >}} | int |
| {{< prop "customization" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "selectedUnlocks" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer){} |
| {{< prop "ping" true >}} | int |
| {{< prop "isSquadPrivate" true >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[EnableInput](#enableinput)**(action: [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum), enable: bool) | void |
| **[OverrideTeamId](#overrideteamid)**(team: [TeamId](/vext/ref/fb/teamid)) | void |
| **[OverrideSquadId](#overridesquadid)**(squad: [SquadId](/vext/ref/fb/squadid)) | void |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[==](#op-eq)** | [Player](/vext/ref/client/type/player) | bool |

## Properties

### {{% prop-heading "name" true %}}

> **string**

### {{% prop-heading "id" true %}}

> **int**

### {{% prop-heading "onlineId" true %}}

> **int**

### {{% prop-heading "teamId" true %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "squadId" true %}}

> **[SquadId](/vext/ref/fb/squadid)**

### {{% prop-heading "inVehicle" true %}}

> **bool**

### {{% prop-heading "soldier" true %}}

> **[SoldierEntity](/vext/ref/client/type/soldierentity)** \| **nil**

### {{% prop-heading "corpse" true %}}

> **[SoldierEntity](/vext/ref/client/type/soldierentity)** \| **nil**

### {{% prop-heading "attachedControllable" true %}}

> **[ControllableEntity](/vext/ref/client/type/controllableentity)** \| **nil**

### {{% prop-heading "controlledControllable" true %}}

> **[ControllableEntity](/vext/ref/client/type/controllableentity)** \| **nil**

### {{% prop-heading "isSquadLeader" true %}}

> **bool**

### {{% prop-heading "alive" true %}}

> **bool**

### {{% prop-heading "kills" true %}}

> **int**

### {{% prop-heading "deaths" true %}}

> **int**

### {{% prop-heading "time" true %}}

> **float**

### {{% prop-heading "score" true %}}

> **int**

### {{% prop-heading "input" true %}}

> **[EntryInput](/vext/ref/shared/type/entryinput)** \| **nil**

### {{% prop-heading "controlledEntryId" true %}}

> **int**

### {{% prop-heading "customization" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

The [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset) currently applied to this player's soldier.

### {{% prop-heading "selectedUnlocks" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**{}

A table of specializations ([UnlockAssetBase](/vext/ref/fb/unlockassetbase)) this player currently has equipped.

### {{% prop-heading "ping" true %}}

> **int**

The players ping to the server.

### {{% prop-heading "isSquadPrivate" true %}}

> **bool**

## Methods

### EnableInput {#enableinput}

> **EnableInput**(action: [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum), enable: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **action** | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |  |
| **enable** | bool |  |

### OverrideTeamId {#overrideteamid}

> **OverrideTeamId**(team: [TeamId](/vext/ref/fb/teamid))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |

### OverrideSquadId {#overridesquadid}

> **OverrideSquadId**(squad: [SquadId](/vext/ref/fb/squadid))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **squad** | [SquadId](/vext/ref/fb/squadid) |  |

## Operators

### operator== {#op-eq}

> operator==(rhs: [Player](/vext/ref/client/type/player)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Player](/vext/ref/client/type/player) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |


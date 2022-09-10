---
title: Player
---

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "id" true >}} | int |
| {{< prop "onlineId" true >}} | int |
| {{< prop "guid" true >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "accountGuid" true >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "ip" true >}} | string |
| {{< prop "ping" true >}} | int |
| {{< prop "alive" true >}} | bool |
| {{< prop "isSquadLeader" true >}} | bool |
| {{< prop "isSquadPrivate" true >}} | bool |
| {{< prop "hasSoldier" true >}} | bool |
| {{< prop "soldier" true >}} | [SoldierEntity](/vext/ref/server/type/soldierentity) \| nil |
| {{< prop "corpse" true >}} | [SoldierEntity](/vext/ref/server/type/soldierentity) \| nil |
| {{< prop "teamId" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "squadId" >}} | [SquadId](/vext/ref/fb/squadid) |
| {{< prop "isAllowedToSpawn" >}} | bool |
| {{< prop "isAllowedToSpawnOn" >}} | bool |
| {{< prop "selectedKit" >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "score" true >}} | int |
| {{< prop "kills" true >}} | int |
| {{< prop "deaths" true >}} | int |
| {{< prop "input" >}} | [EntryInput](/vext/ref/shared/type/entryinput) \| nil |
| {{< prop "controlledEntryId" true >}} | int |
| {{< prop "attachedControllable" true >}} | [ControllableEntity](/vext/ref/server/type/controllableentity) \| nil |
| {{< prop "controlledControllable" true >}} | [ControllableEntity](/vext/ref/server/type/controllableentity) \| nil |
| {{< prop "customization" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "selectedUnlocks" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer){} |
| {{< prop "visualUnlocks" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer){} |
| {{< prop "weapons" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer)[] |
| {{< prop "weaponUnlocks" true >}} | ([DataContainer](/vext/ref/shared/type/datacontainer){})[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Kick](#kick)**() | void |
| **[Kick](#kick-1)**(reason: string) | void |
| **[Ban](#ban)**() | void |
| **[Ban](#ban-1)**(reason: string) | void |
| **[BanTemporarily](#bantemporarily)**(seconds: int) | void |
| **[BanTemporarily](#bantemporarily-1)**(seconds: int, reason: string) | void |
| **[BanByName](#banbyname)**() | void |
| **[BanByName](#banbyname-1)**(reason: string) | void |
| **[BanByNameTemporarily](#banbynametemporarily)**(seconds: int) | void |
| **[BanByNameTemporarily](#banbynametemporarily-1)**(seconds: int, reason: string) | void |
| **[BanByIp](#banbyip)**() | void |
| **[BanByIp](#banbyip-1)**(reason: string) | void |
| **[BanByIpTemporarily](#banbyiptemporarily)**(seconds: int) | void |
| **[BanByIpTemporarily](#banbyiptemporarily-1)**(seconds: int, reason: string) | void |
| **[Spawn](#spawn)**(spawnPoint: [Entity](/vext/ref/shared/type/entity), checkSpawnArea: bool) | bool |
| **[SelectWeapon](#selectweapon)**(slot: [WeaponSlot](/vext/ref/fb/weaponslot), weaponUnlockAsset: [DataContainer](/vext/ref/shared/type/datacontainer), unlockAssets: [DataContainer](/vext/ref/shared/type/datacontainer){}) | void |
| **[SelectUnlockAssets](#selectunlockassets)**(characterCustomizationAsset: [DataContainer](/vext/ref/shared/type/datacontainer), visualUnlockAssets: [DataContainer](/vext/ref/shared/type/datacontainer){}) | void |
| **[CreateSoldier](#createsoldier)**(soldierBlueprint: [DataContainer](/vext/ref/shared/type/datacontainer), transform: [LinearTransform](/vext/ref/shared/type/lineartransform)) | [SoldierEntity](/vext/ref/server/type/soldierentity) \| nil |
| **[SpawnSoldierAt](#spawnsoldierat)**(soldier: [SoldierEntity](/vext/ref/server/type/soldierentity), transform: [LinearTransform](/vext/ref/shared/type/lineartransform), pose: [CharacterPoseType](/vext/ref/fb/characterposetype)) | void |
| **[SetSquadLeader](#setsquadleader)**(leader: bool, squadPrivate: bool) | void |
| **[AttachSoldier](#attachsoldier)**(soldier: [SoldierEntity](/vext/ref/server/type/soldierentity)) | void |
| **[EnableInput](#enableinput)**(action: [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum), enable: bool) | void |
| **[Fade](#fade)**(fadeTime: float, fadeToBlack: bool) | void |
| **[EnterVehicle](#entervehicle)**(vehicle: [Entity](/vext/ref/shared/type/entity), entryId: int) | void |
| **[ExitVehicle](#exitvehicle)**(force: bool, exitOnEntry: bool) | void |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[==](#op-eq)** | [Player](/vext/ref/server/type/player) | bool |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "id" true %}}

> **int**

### {{% prop-heading "onlineId" true %}}

> **int**

### {{% prop-heading "guid" true %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "accountGuid" true %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "ip" true %}}

> **string**

### {{% prop-heading "ping" true %}}

> **int**

### {{% prop-heading "alive" true %}}

> **bool**

### {{% prop-heading "isSquadLeader" true %}}

> **bool**

### {{% prop-heading "isSquadPrivate" true %}}

> **bool**

Always false for non squad leaders.

### {{% prop-heading "hasSoldier" true %}}

> **bool**

### {{% prop-heading "soldier" true %}}

> **[SoldierEntity](/vext/ref/server/type/soldierentity)** \| **nil**

### {{% prop-heading "corpse" true %}}

> **[SoldierEntity](/vext/ref/server/type/soldierentity)** \| **nil**

### {{% prop-heading "teamId" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "squadId" %}}

> **[SquadId](/vext/ref/fb/squadid)**

### {{% prop-heading "isAllowedToSpawn" %}}

> **bool**

Describes if this player is allowed to spawn.

### {{% prop-heading "isAllowedToSpawnOn" %}}

> **bool**

Describes if other players are allowed to spawn on this player.

### {{% prop-heading "selectedKit" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

This is the [SoldierBlueprint](/vext/ref/fb/soldierblueprint).

### {{% prop-heading "score" true %}}

> **int**

### {{% prop-heading "kills" true %}}

> **int**

### {{% prop-heading "deaths" true %}}

> **int**

### {{% prop-heading "input" %}}

> **[EntryInput](/vext/ref/shared/type/entryinput)** \| **nil**

### {{% prop-heading "controlledEntryId" true %}}

> **int**

### {{% prop-heading "attachedControllable" true %}}

> **[ControllableEntity](/vext/ref/server/type/controllableentity)** \| **nil**

### {{% prop-heading "controlledControllable" true %}}

> **[ControllableEntity](/vext/ref/server/type/controllableentity)** \| **nil**

### {{% prop-heading "customization" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

The [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset) currently applied to this player's soldier.

### {{% prop-heading "selectedUnlocks" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**{}

A table of specializations ([UnlockAssetBase](/vext/ref/fb/unlockassetbase)) this player currently has equipped.

### {{% prop-heading "visualUnlocks" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**{}

A table of visual unlocks ([UnlockAsset](/vext/ref/fb/unlockasset)) this player currently has equipped.

### {{% prop-heading "weapons" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**[]

An array of weapons ([SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset)) this player currently has equipped. This array can be indexed using [WeaponSlot](/vext/ref/fb/weaponslot) `+ 1`. A weapon at a given slot may be `nil` if nothing is equipped.

### {{% prop-heading "weaponUnlocks" true %}}

> (**[DataContainer](/vext/ref/shared/type/datacontainer)**{})[]

An array containing tables of equipped unlocks ([UnlockAssetBase](/vext/ref/fb/unlockassetbase)) for each weapon this player has. This array can be indexed using [WeaponSlot](/vext/ref/fb/weaponslot) `+ 1`. The unlocks may be `nil` if there is no weapon equipped at a given slot.

## Methods

### Kick {#kick}

> **Kick**()

### Kick {#kick-1}

> **Kick**(reason: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **reason** | string |  |

### Ban {#ban}

> **Ban**()

### Ban {#ban-1}

> **Ban**(reason: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **reason** | string |  |

### BanTemporarily {#bantemporarily}

> **BanTemporarily**(seconds: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **seconds** | int |  |

### BanTemporarily {#bantemporarily-1}

> **BanTemporarily**(seconds: int, reason: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **seconds** | int |  |
| **reason** | string |  |

### BanByName {#banbyname}

> **BanByName**()

### BanByName {#banbyname-1}

> **BanByName**(reason: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **reason** | string |  |

### BanByNameTemporarily {#banbynametemporarily}

> **BanByNameTemporarily**(seconds: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **seconds** | int |  |

### BanByNameTemporarily {#banbynametemporarily-1}

> **BanByNameTemporarily**(seconds: int, reason: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **seconds** | int |  |
| **reason** | string |  |

### BanByIp {#banbyip}

> **BanByIp**()

### BanByIp {#banbyip-1}

> **BanByIp**(reason: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **reason** | string |  |

### BanByIpTemporarily {#banbyiptemporarily}

> **BanByIpTemporarily**(seconds: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **seconds** | int |  |

### BanByIpTemporarily {#banbyiptemporarily-1}

> **BanByIpTemporarily**(seconds: int, reason: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **seconds** | int |  |
| **reason** | string |  |

### Spawn {#spawn}

> **Spawn**(spawnPoint: [Entity](/vext/ref/shared/type/entity), checkSpawnArea: bool): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **spawnPoint** | [Entity](/vext/ref/shared/type/entity) | Expected type `ServerCharacterSpawnEntity` |
| **checkSpawnArea** | bool |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### SelectWeapon {#selectweapon}

> **SelectWeapon**(slot: [WeaponSlot](/vext/ref/fb/weaponslot), weaponUnlockAsset: [DataContainer](/vext/ref/shared/type/datacontainer), unlockAssets: [DataContainer](/vext/ref/shared/type/datacontainer){})

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **slot** | [WeaponSlot](/vext/ref/fb/weaponslot) |  |
| **weaponUnlockAsset** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **unlockAssets** | [DataContainer](/vext/ref/shared/type/datacontainer){} |  |

### SelectUnlockAssets {#selectunlockassets}

> **SelectUnlockAssets**(characterCustomizationAsset: [DataContainer](/vext/ref/shared/type/datacontainer), visualUnlockAssets: [DataContainer](/vext/ref/shared/type/datacontainer){})

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **characterCustomizationAsset** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **visualUnlockAssets** | [DataContainer](/vext/ref/shared/type/datacontainer){} |  |

### CreateSoldier {#createsoldier}

> **CreateSoldier**(soldierBlueprint: [DataContainer](/vext/ref/shared/type/datacontainer), transform: [LinearTransform](/vext/ref/shared/type/lineartransform)): [SoldierEntity](/vext/ref/server/type/soldierentity) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **soldierBlueprint** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoldierEntity](/vext/ref/server/type/soldierentity)** \| **nil** |  |

### SpawnSoldierAt {#spawnsoldierat}

> **SpawnSoldierAt**(soldier: [SoldierEntity](/vext/ref/server/type/soldierentity), transform: [LinearTransform](/vext/ref/shared/type/lineartransform), pose: [CharacterPoseType](/vext/ref/fb/characterposetype))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **soldier** | [SoldierEntity](/vext/ref/server/type/soldierentity) |  |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
| **pose** | [CharacterPoseType](/vext/ref/fb/characterposetype) |  |

### SetSquadLeader {#setsquadleader}

> **SetSquadLeader**(leader: bool, squadPrivate: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **leader** | bool |  |
| **squadPrivate** | bool |  |

### AttachSoldier {#attachsoldier}

> **AttachSoldier**(soldier: [SoldierEntity](/vext/ref/server/type/soldierentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **soldier** | [SoldierEntity](/vext/ref/server/type/soldierentity) |  |

### EnableInput {#enableinput}

> **EnableInput**(action: [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum), enable: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **action** | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |  |
| **enable** | bool |  |

### Fade {#fade}

> **Fade**(fadeTime: float, fadeToBlack: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **fadeTime** | float |  |
| **fadeToBlack** | bool |  |

### EnterVehicle {#entervehicle}

> **EnterVehicle**(vehicle: [Entity](/vext/ref/shared/type/entity), entryId: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **vehicle** | [Entity](/vext/ref/shared/type/entity) |  |
| **entryId** | int |  |

### ExitVehicle {#exitvehicle}

> **ExitVehicle**(force: bool, exitOnEntry: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **force** | bool |  |
| **exitOnEntry** | bool |  |

## Operators

### operator== {#op-eq}

> operator==(rhs: [Player](/vext/ref/server/type/player)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Player](/vext/ref/server/type/player) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |


---
title: CapturePointEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CapturePointEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| CapturePointEntityData(CapturePointEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| CapturePointEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [CapturePointEntityData](CapturePointEntityData).                    |
| CapturePointEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CapturePointEntityData](CapturePointEntityData).              |
| CapturePointEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CapturePointEntityData](CapturePointEntityData).                            |
| CapturePointEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CapturePointEntityData](CapturePointEntityData).                    |
| CapturePointEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CapturePointEntityData](CapturePointEntityData).              |
| CapturePointEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CapturePointEntityData](CapturePointEntityData). |

## Properties

| Name                        | Type                                   | Description |
| --------------------------- | -------------------------------------- | ----------- |
| enemyTicketLossWhenCaptured | number                                 |             |
| minNrToTakeControl          | number                                 |             |
| flagTemplates               | [ObjectBlueprint](ObjectBlueprint)\[\] |             |
| capturePoint                | [ObjectBlueprint](ObjectBlueprint)     |             |
| initialOwnerTeam            | [TeamId](TeamId)                       |             |
| captureRadius               | number                                 |             |
| maxCaptureMultiplier        | number                                 |             |
| areaValue                   | number                                 |             |
| spawnMenuListOrdinal        | number                                 |             |
| areaValues                  | [AreaValueTeam](AreaValueTeam)\[\]     |             |
| timeToGetControl            | number                                 |             |
| timeToLoseControl           | number                                 |             |
| returnMultiplier            | number                                 |             |
| onlyTakeableByTeam          | number                                 |             |
| showRadius                  | number                                 |             |
| hideRadius                  | number                                 |             |
| addedMultiplierPerPlayer    | number                                 |             |
| modify3DIconVerticalOffset  | number                                 |             |
| capturableType              | [CapturableType](CapturableType)       |             |
| intruderWarningSID          | string                                 |             |
| isCapturedInUpperSphere     | bool                                   |             |
| disableWhenLosingControl    | bool                                   |             |
| loseControlWhenNotClose     | bool                                   |             |
| disableIfEnemyInside        | bool                                   |             |
| isVisible                   | bool                                   |             |
| forceSnap                   | bool                                   |             |
| useAreaValuesPerTeam        | bool                                   |             |
| intruderWarning             | bool                                   |             |
| showOnMinimap               | bool                                   |             |
| hoistFlag                   | bool                                   |             |
| startAtBottom               | bool                                   |             |
| removeWhenCaptured          | bool                                   |             |
| seesawCapturing             | bool                                   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CapturePointEntityData](CapturePointEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CapturePointEntityData](CapturePointEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |

---
title: CapturePointEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CapturePointEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| CapturePointEntityData(CapturePointEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| CapturePointEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata/).                    |
| CapturePointEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata/).              |
| CapturePointEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata/).                            |
| CapturePointEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata/).                    |
| CapturePointEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata/).              |
| CapturePointEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata/). |

## Properties

| Name                        | Type                                   | Description |
| --------------------------- | -------------------------------------- | ----------- |
| enemyTicketLossWhenCaptured | number                                 |             |
| minNrToTakeControl          | number                                 |             |
| flagTemplates               | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)\[\] |             |
| capturePoint                | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)     |             |
| initialOwnerTeam            | [TeamId](/vext/ref/fb/teamid/)                       |             |
| captureRadius               | number                                 |             |
| maxCaptureMultiplier        | number                                 |             |
| areaValue                   | number                                 |             |
| spawnMenuListOrdinal        | number                                 |             |
| areaValues                  | [AreaValueTeam](/vext/ref/fb/areavalueteam/)\[\]     |             |
| timeToGetControl            | number                                 |             |
| timeToLoseControl           | number                                 |             |
| returnMultiplier            | number                                 |             |
| onlyTakeableByTeam          | number                                 |             |
| showRadius                  | number                                 |             |
| hideRadius                  | number                                 |             |
| addedMultiplierPerPlayer    | number                                 |             |
| modify3DIconVerticalOffset  | number                                 |             |
| capturableType              | [CapturableType](/vext/ref/fb/capturabletype/)       |             |
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
| [CapturePointEntityData](/vext/ref/fb/capturepointentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CapturePointEntityData](/vext/ref/fb/capturepointentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |

---
title: MapMarkerEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| MapMarkerEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| MapMarkerEntityData(MapMarkerEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| MapMarkerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [MapMarkerEntityData](MapMarkerEntityData).                    |
| MapMarkerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [MapMarkerEntityData](MapMarkerEntityData).              |
| MapMarkerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [MapMarkerEntityData](MapMarkerEntityData).                            |
| MapMarkerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MapMarkerEntityData](MapMarkerEntityData).                    |
| MapMarkerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MapMarkerEntityData](MapMarkerEntityData).              |
| MapMarkerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MapMarkerEntityData](MapMarkerEntityData). |

## Properties

| Name                            | Type                              | Description |
| ------------------------------- | --------------------------------- | ----------- |
| baseTransform                   | [Vec3](/vext/ref/shared/class/vec3) |             |
| progressMinTime                 | number                            |             |
| sid                             | string                            |             |
| nrOfPassengers                  | number                            |             |
| nrOfEntries                     | number                            |             |
| progressTime1Player             | number                            |             |
| showRadius                      | number                            |             |
| hideRadius                      | number                            |             |
| blinkTime                       | number                            |             |
| markerType                      | [MapMarkerType](MapMarkerType)    |             |
| visibleForTeam                  | [TeamId](TeamId)                  |             |
| ownerTeam                       | [TeamId](TeamId)                  |             |
| hudIcon                         | [UIHudIcon](UIHudIcon)            |             |
| verticalOffset                  | number                            |             |
| focusPointRadius                | number                            |             |
| instantFlagReturnRadius         | number                            |             |
| progress                        | number                            |             |
| progressPlayerSpeedUpPercentage | number                            |             |
| trackedPlayersInRange           | number                            |             |
| trackingPlayerRange             | number                            |             |
| progressTime                    | number                            |             |
| onlyShowSnapped                 | bool                              |             |
| flagControlMarker               | bool                              |             |
| showProgress                    | bool                              |             |
| useMarkerTransform              | bool                              |             |
| isVisible                       | bool                              |             |
| snap                            | bool                              |             |
| showAirTargetBox                | bool                              |             |
| isFocusPoint                    | bool                              |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [MapMarkerEntityData](MapMarkerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MapMarkerEntityData](MapMarkerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |

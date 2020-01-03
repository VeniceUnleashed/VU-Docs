---
title: MapMarkerEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| MapMarkerEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| MapMarkerEntityData(MapMarkerEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| MapMarkerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata/).                    |
| MapMarkerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata/).              |
| MapMarkerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata/).                            |
| MapMarkerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata/).                    |
| MapMarkerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata/).              |
| MapMarkerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata/). |

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
| markerType                      | [MapMarkerType](/vext/ref/fb/mapmarkertype/)    |             |
| visibleForTeam                  | [TeamId](/vext/ref/fb/teamid/)                  |             |
| ownerTeam                       | [TeamId](/vext/ref/fb/teamid/)                  |             |
| hudIcon                         | [UIHudIcon](/vext/ref/fb/uihudicon/)            |             |
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
| [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |

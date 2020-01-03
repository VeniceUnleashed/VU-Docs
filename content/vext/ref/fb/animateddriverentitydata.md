---
title: AnimatedDriverEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedDriverEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| AnimatedDriverEntityData(AnimatedDriverEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AnimatedDriverEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata/).                    |
| AnimatedDriverEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata/).              |
| AnimatedDriverEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata/).                            |
| AnimatedDriverEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata/).                    |
| AnimatedDriverEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata/).              |
| AnimatedDriverEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata/). |

## Properties

| Name                         | Type                                                    | Description |
| ---------------------------- | ------------------------------------------------------- | ----------- |
| inputTransform               | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| vehicleBoost                 | [AntRef](/vext/ref/fb/antref/)                                        |             |
| vehicleSpeed                 | [AntRef](/vext/ref/fb/antref/)                                        |             |
| vehicleMovementState         | [AntRef](/vext/ref/fb/antref/)                                        |             |
| vehicleClutch                | [AntRef](/vext/ref/fb/antref/)                                        |             |
| vehicleBrake                 | [AntRef](/vext/ref/fb/antref/)                                        |             |
| movementStateStandThreshold  | number                                                  |             |
| yaw                          | [NormalizeSettings](/vext/ref/fb/normalizesettings/)                  |             |
| roll                         | [NormalizeSettings](/vext/ref/fb/normalizesettings/)                  |             |
| pitch                        | [NormalizeSettings](/vext/ref/fb/normalizesettings/)                  |             |
| delayAnimationWheelTransform | bool                                                    |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |

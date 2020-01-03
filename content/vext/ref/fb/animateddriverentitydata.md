---
title: AnimatedDriverEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedDriverEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| AnimatedDriverEntityData(AnimatedDriverEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AnimatedDriverEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [AnimatedDriverEntityData](AnimatedDriverEntityData).                    |
| AnimatedDriverEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [AnimatedDriverEntityData](AnimatedDriverEntityData).              |
| AnimatedDriverEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AnimatedDriverEntityData](AnimatedDriverEntityData).                            |
| AnimatedDriverEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AnimatedDriverEntityData](AnimatedDriverEntityData).                    |
| AnimatedDriverEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AnimatedDriverEntityData](AnimatedDriverEntityData).              |
| AnimatedDriverEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedDriverEntityData](AnimatedDriverEntityData). |

## Properties

| Name                         | Type                                                    | Description |
| ---------------------------- | ------------------------------------------------------- | ----------- |
| inputTransform               | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| vehicleBoost                 | [AntRef](AntRef)                                        |             |
| vehicleSpeed                 | [AntRef](AntRef)                                        |             |
| vehicleMovementState         | [AntRef](AntRef)                                        |             |
| vehicleClutch                | [AntRef](AntRef)                                        |             |
| vehicleBrake                 | [AntRef](AntRef)                                        |             |
| movementStateStandThreshold  | number                                                  |             |
| yaw                          | [NormalizeSettings](NormalizeSettings)                  |             |
| roll                         | [NormalizeSettings](NormalizeSettings)                  |             |
| pitch                        | [NormalizeSettings](NormalizeSettings)                  |             |
| delayAnimationWheelTransform | bool                                                    |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedDriverEntityData](AnimatedDriverEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedDriverEntityData](AnimatedDriverEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |

---
title: ChildComponentData
---
### Base Classes

[PartComponentData](PartComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ChildComponentData()                                                          | Create a new instance of this container type.                                                                               |
| ChildComponentData(ChildComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| ChildComponentData([PartComponentData](PartComponentData) other)              | Upcast an instance of type [PartComponentData](PartComponentData) to [ChildComponentData](ChildComponentData).              |
| ChildComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [ChildComponentData](ChildComponentData).                      |
| ChildComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ChildComponentData](ChildComponentData).                    |
| ChildComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ChildComponentData](ChildComponentData).              |
| ChildComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChildComponentData](ChildComponentData). |

## Properties

| Name                   | Type                                                    | Description |
| ---------------------- | ------------------------------------------------------- | ----------- |
| alignTransform         | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| movingBody             | [MovingBodyData](MovingBodyData)                        |             |
| healthZone             | [VehicleHealthZoneData](VehicleHealthZoneData)          |             |
| soundEffectStartRpm    | number                                                  |             |
| soundEffectStopRpm     | number                                                  |             |
| alignmentSettings      | [AlignmentData](AlignmentData)                          |             |
| soundEffect            | [SoundAsset](SoundAsset)                                |             |
| enableAlignToCamera    | bool                                                    |             |
| worldSpacePositionLock | bool                                                    |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [ChildComponentData](ChildComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChildComponentData](ChildComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |

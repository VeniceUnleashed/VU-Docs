---
title: ChildComponentData
---
### Base Classes

[PartComponentData](/vext/ref/fb/partcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ChildComponentData()                                                          | Create a new instance of this container type.                                                                               |
| ChildComponentData(ChildComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| ChildComponentData([PartComponentData](/vext/ref/fb/partcomponentdata/) other)              | Upcast an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata/) to [ChildComponentData](/vext/ref/fb/childcomponentdata/).              |
| ChildComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [ChildComponentData](/vext/ref/fb/childcomponentdata/).                      |
| ChildComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ChildComponentData](/vext/ref/fb/childcomponentdata/).                    |
| ChildComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ChildComponentData](/vext/ref/fb/childcomponentdata/).              |
| ChildComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChildComponentData](/vext/ref/fb/childcomponentdata/). |

## Properties

| Name                   | Type                                                    | Description |
| ---------------------- | ------------------------------------------------------- | ----------- |
| alignTransform         | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| movingBody             | [MovingBodyData](/vext/ref/fb/movingbodydata/)                        |             |
| healthZone             | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata/)          |             |
| soundEffectStartRpm    | number                                                  |             |
| soundEffectStopRpm     | number                                                  |             |
| alignmentSettings      | [AlignmentData](/vext/ref/fb/alignmentdata/)                          |             |
| soundEffect            | [SoundAsset](/vext/ref/fb/soundasset/)                                |             |
| enableAlignToCamera    | bool                                                    |             |
| worldSpacePositionLock | bool                                                    |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [ChildComponentData](/vext/ref/fb/childcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChildComponentData](/vext/ref/fb/childcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |

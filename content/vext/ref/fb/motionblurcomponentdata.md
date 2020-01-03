---
title: MotionBlurComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| MotionBlurComponentData()                                                          | Create a new instance of this container type.                                                                                         |
| MotionBlurComponentData(MotionBlurComponentData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| MotionBlurComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [MotionBlurComponentData](/vext/ref/fb/motionblurcomponentdata/).                      |
| MotionBlurComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MotionBlurComponentData](/vext/ref/fb/motionblurcomponentdata/).                    |
| MotionBlurComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MotionBlurComponentData](/vext/ref/fb/motionblurcomponentdata/).              |
| MotionBlurComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MotionBlurComponentData](/vext/ref/fb/motionblurcomponentdata/). |

## Properties

| Name                   | Type           | Description |
| ---------------------- | -------------- | ----------- |
| realm                  | [Realm](/vext/ref/fb/realm/) |             |
| cutoffGradientScale    | number         |             |
| motionBlurCutoffRadius | number         |             |
| motionBlurEnable       | bool           |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MotionBlurComponentData](/vext/ref/fb/motionblurcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MotionBlurComponentData](/vext/ref/fb/motionblurcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |

---
title: DynamicEnvmapComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicEnvmapComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| DynamicEnvmapComponentData(DynamicEnvmapComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DynamicEnvmapComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata/).                      |
| DynamicEnvmapComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata/).                    |
| DynamicEnvmapComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata/).              |
| DynamicEnvmapComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata/). |

## Properties

| Name              | Type                              | Description |
| ----------------- | --------------------------------- | ----------- |
| keyColorEnvmap    | [Vec3](/vext/ref/shared/class/vec3) |             |
| groundColorEnvmap | [Vec3](/vext/ref/shared/class/vec3) |             |
| skyColorEnvmap    | [Vec3](/vext/ref/shared/class/vec3) |             |
| enable            | bool                              |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |

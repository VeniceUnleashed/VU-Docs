---
title: DynamicEnvmapComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicEnvmapComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| DynamicEnvmapComponentData(DynamicEnvmapComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DynamicEnvmapComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DynamicEnvmapComponentData](DynamicEnvmapComponentData).                      |
| DynamicEnvmapComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DynamicEnvmapComponentData](DynamicEnvmapComponentData).                    |
| DynamicEnvmapComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DynamicEnvmapComponentData](DynamicEnvmapComponentData).              |
| DynamicEnvmapComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicEnvmapComponentData](DynamicEnvmapComponentData). |

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
| [DynamicEnvmapComponentData](DynamicEnvmapComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicEnvmapComponentData](DynamicEnvmapComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |

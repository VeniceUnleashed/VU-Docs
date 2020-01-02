---
title: BlueprintBundleLoaderEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintBundleLoaderEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| BlueprintBundleLoaderEntityData(BlueprintBundleLoaderEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| BlueprintBundleLoaderEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [BlueprintBundleLoaderEntityData](BlueprintBundleLoaderEntityData).                    |
| BlueprintBundleLoaderEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [BlueprintBundleLoaderEntityData](BlueprintBundleLoaderEntityData).              |
| BlueprintBundleLoaderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [BlueprintBundleLoaderEntityData](BlueprintBundleLoaderEntityData).                            |
| BlueprintBundleLoaderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [BlueprintBundleLoaderEntityData](BlueprintBundleLoaderEntityData).                    |
| BlueprintBundleLoaderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BlueprintBundleLoaderEntityData](BlueprintBundleLoaderEntityData).              |
| BlueprintBundleLoaderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintBundleLoaderEntityData](BlueprintBundleLoaderEntityData). |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [BlueprintBundleLoaderEntityData](BlueprintBundleLoaderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintBundleLoaderEntityData](BlueprintBundleLoaderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |

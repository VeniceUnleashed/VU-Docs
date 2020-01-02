---
title: BlueprintBundleStateLogicEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintBundleStateLogicEntityData()                                                          | Create a new instance of this container type.                                                                                                                 |
| BlueprintBundleStateLogicEntityData(BlueprintBundleStateLogicEntityData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| BlueprintBundleStateLogicEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [BlueprintBundleStateLogicEntityData](BlueprintBundleStateLogicEntityData).                    |
| BlueprintBundleStateLogicEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [BlueprintBundleStateLogicEntityData](BlueprintBundleStateLogicEntityData).              |
| BlueprintBundleStateLogicEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [BlueprintBundleStateLogicEntityData](BlueprintBundleStateLogicEntityData).                            |
| BlueprintBundleStateLogicEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [BlueprintBundleStateLogicEntityData](BlueprintBundleStateLogicEntityData).                    |
| BlueprintBundleStateLogicEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BlueprintBundleStateLogicEntityData](BlueprintBundleStateLogicEntityData).              |
| BlueprintBundleStateLogicEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintBundleStateLogicEntityData](BlueprintBundleStateLogicEntityData). |

## Properties

| Name        | Type       | Description |
| ----------- | ---------- | ----------- |
| bundleNames | string\[\] |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BlueprintBundleStateLogicEntityData](BlueprintBundleStateLogicEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintBundleStateLogicEntityData](BlueprintBundleStateLogicEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |

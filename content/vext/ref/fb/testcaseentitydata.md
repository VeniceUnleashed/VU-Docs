---
title: TestCaseEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TestCaseEntityData()                                                          | Create a new instance of this container type.                                                                               |
| TestCaseEntityData(TestCaseEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| TestCaseEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TestCaseEntityData](TestCaseEntityData).                            |
| TestCaseEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TestCaseEntityData](TestCaseEntityData).                    |
| TestCaseEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TestCaseEntityData](TestCaseEntityData).              |
| TestCaseEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TestCaseEntityData](TestCaseEntityData). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| timeOut      | number |             |
| testGroup    | string |             |
| testCaseName | string |             |
| stable       | bool   |             |
| enabled      | bool   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [TestCaseEntityData](TestCaseEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TestCaseEntityData](TestCaseEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |

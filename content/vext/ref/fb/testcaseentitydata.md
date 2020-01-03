---
title: TestCaseEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TestCaseEntityData()                                                          | Create a new instance of this container type.                                                                               |
| TestCaseEntityData(TestCaseEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| TestCaseEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata/).                            |
| TestCaseEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata/).                    |
| TestCaseEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata/).              |
| TestCaseEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata/). |

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
| [TestCaseEntityData](/vext/ref/fb/testcaseentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TestCaseEntityData](/vext/ref/fb/testcaseentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |

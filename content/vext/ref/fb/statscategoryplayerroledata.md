---
title: StatsCategoryPlayerRoleData
---
### Base Classes

[StatsCategoryBaseData](StatsCategoryBaseData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryPlayerRoleData()                                                          | Create a new instance of this container type.                                                                                                 |
| StatsCategoryPlayerRoleData(StatsCategoryPlayerRoleData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| StatsCategoryPlayerRoleData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryPlayerRoleData](StatsCategoryPlayerRoleData).      |
| StatsCategoryPlayerRoleData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryPlayerRoleData](StatsCategoryPlayerRoleData).                        |
| StatsCategoryPlayerRoleData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryPlayerRoleData](StatsCategoryPlayerRoleData). |

## Properties

| Name  | Type                         | Description |
| ----- | ---------------------------- | ----------- |
| roles | [PlayerRole](PlayerRole)\[\] |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryPlayerRoleData](StatsCategoryPlayerRoleData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryPlayerRoleData](StatsCategoryPlayerRoleData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |

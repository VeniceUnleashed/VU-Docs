---
title: StatsCategoryPlayerRoleData
---
### Base Classes

[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryPlayerRoleData()                                                          | Create a new instance of this container type.                                                                                                 |
| StatsCategoryPlayerRoleData(StatsCategoryPlayerRoleData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| StatsCategoryPlayerRoleData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryPlayerRoleData](/vext/ref/fb/statscategoryplayerroledata/).      |
| StatsCategoryPlayerRoleData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryPlayerRoleData](/vext/ref/fb/statscategoryplayerroledata/).                        |
| StatsCategoryPlayerRoleData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryPlayerRoleData](/vext/ref/fb/statscategoryplayerroledata/). |

## Properties

| Name  | Type                         | Description |
| ----- | ---------------------------- | ----------- |
| roles | [PlayerRole](/vext/ref/fb/playerrole/)\[\] |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryPlayerRoleData](/vext/ref/fb/statscategoryplayerroledata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryPlayerRoleData](/vext/ref/fb/statscategoryplayerroledata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |

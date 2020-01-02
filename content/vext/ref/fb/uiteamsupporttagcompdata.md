---
title: UITeamSupportTagCompData
---
### Base Classes

[UI3dIconCompData](UI3dIconCompData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UITeamSupportTagCompData()                                                          | Create a new instance of this container type.                                                                                           |
| UITeamSupportTagCompData(UITeamSupportTagCompData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UITeamSupportTagCompData([UI3dIconCompData](UI3dIconCompData) other)                | Upcast an instance of type [UI3dIconCompData](UI3dIconCompData) to [UITeamSupportTagCompData](UITeamSupportTagCompData).                |
| UITeamSupportTagCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UITeamSupportTagCompData](UITeamSupportTagCompData).                  |
| UITeamSupportTagCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UITeamSupportTagCompData](UITeamSupportTagCompData).                                      |
| UITeamSupportTagCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UITeamSupportTagCompData](UITeamSupportTagCompData). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UITeamSupportTagCompData](UITeamSupportTagCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UITeamSupportTagCompData](UITeamSupportTagCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |

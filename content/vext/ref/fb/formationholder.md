---
title: FormationHolder
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| FormationHolder()                                                          | Create a new instance of this container type.                                                                         |
| FormationHolder(FormationHolder other)                                     | Create a reference copy of an instance of the same type.                                                              |
| FormationHolder([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [FormationHolder](/vext/ref/fb/formationholder/).                                      |
| FormationHolder([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FormationHolder](/vext/ref/fb/formationholder/). |

## Properties

| Name       | Type                               | Description |
| ---------- | ---------------------------------- | ----------- |
| formations | [FormationData](/vext/ref/fb/formationdata/)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [FormationHolder](/vext/ref/fb/formationholder/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FormationHolder](/vext/ref/fb/formationholder/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |

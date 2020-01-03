---
title: EntryInputActionMapsData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| EntryInputActionMapsData()                                                          | Create a new instance of this container type.                                                                                           |
| EntryInputActionMapsData(EntryInputActionMapsData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| EntryInputActionMapsData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata/).                                      |
| EntryInputActionMapsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata/). |

## Properties

| Name                    | Type                                                   | Description |
| ----------------------- | ------------------------------------------------------ | ----------- |
| actionMapSettingsScheme | number                                                 |             |
| defaultInputActionMap   | [InputActionMapSlot](/vext/ref/fb/inputactionmapslot/)               |             |
| inputActionMaps         | [EntryInputActionMapData](/vext/ref/fb/entryinputactionmapdata/)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |

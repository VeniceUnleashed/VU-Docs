---
title: PlayerViewData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[PlayerViewData](#constructor-0)**() |
| **[PlayerViewData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PlayerViewData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "subViews" >}} | [SubViewData](/vext/ref/fb/subviewdata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PlayerViewData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PlayerViewData {#constructor-0}
> **PlayerViewData**()

Creates a new [PlayerViewData](/vext/ref/fb/playerviewdata) frostbite instance.

### PlayerViewData {#constructor-1}
> **PlayerViewData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PlayerViewData](/vext/ref/fb/playerviewdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PlayerViewData {#constructor-2}
> **PlayerViewData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerViewData](/vext/ref/fb/playerviewdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PlayerViewData](/vext/ref/fb/playerviewdata). |

## Properties
### {{% prop-heading "subViews" %}}
> **[SubViewData](/vext/ref/fb/subviewdata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PlayerViewData](/vext/ref/fb/playerviewdata) type.


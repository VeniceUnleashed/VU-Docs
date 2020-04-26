---
title: SlidingStateData
---

Inherits from 
[CharacterStateData](/vext/ref/fb/characterstatedata)

## Summary
### Constructors
| |
| ----------- |
| **[SlidingStateData](#constructor-0)**() |
| **[SlidingStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SlidingStateData](#constructor-2)**(other: [CharacterStateData](/vext/ref/fb/characterstatedata)) |
| **[SlidingStateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "horizontalInputScale" >}} | float |
| {{< prop "gravityScale" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SlidingStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SlidingStateData {#constructor-0}
> **SlidingStateData**()

Creates a new [SlidingStateData](/vext/ref/fb/slidingstatedata) frostbite instance.

### SlidingStateData {#constructor-1}
> **SlidingStateData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SlidingStateData](/vext/ref/fb/slidingstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SlidingStateData {#constructor-2}
> **SlidingStateData**(other: [CharacterStateData](/vext/ref/fb/characterstatedata))

Casts an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata) to [SlidingStateData](/vext/ref/fb/slidingstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CharacterStateData](/vext/ref/fb/characterstatedata) | The instance to cast to [SlidingStateData](/vext/ref/fb/slidingstatedata). |

### SlidingStateData {#constructor-3}
> **SlidingStateData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SlidingStateData](/vext/ref/fb/slidingstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SlidingStateData](/vext/ref/fb/slidingstatedata). |

## Properties
### {{% prop-heading "horizontalInputScale" %}}
> **float**

### {{% prop-heading "gravityScale" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SlidingStateData](/vext/ref/fb/slidingstatedata) type.


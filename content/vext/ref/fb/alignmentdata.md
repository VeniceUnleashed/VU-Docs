---
title: AlignmentData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AlignmentData](#constructor-0)**() |
| **[AlignmentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AlignmentData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "alignAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "stopTolerance" >}} | float |
| {{< prop "speed" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AlignmentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AlignmentData {#constructor-0}
> **AlignmentData**()

Creates a new [AlignmentData](/vext/ref/fb/alignmentdata) frostbite instance.

### AlignmentData {#constructor-1}
> **AlignmentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AlignmentData](/vext/ref/fb/alignmentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AlignmentData {#constructor-2}
> **AlignmentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AlignmentData](/vext/ref/fb/alignmentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AlignmentData](/vext/ref/fb/alignmentdata). |

## Properties
### {{% prop-heading "alignAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "stopTolerance" %}}
> **float**

### {{% prop-heading "speed" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AlignmentData](/vext/ref/fb/alignmentdata) type.


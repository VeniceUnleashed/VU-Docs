---
title: PropertyTrackData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[PropertyTrackData](#constructor-0)**() |
| **[PropertyTrackData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PropertyTrackData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | int |
| {{< prop "times" >}} | int[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PropertyTrackData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PropertyTrackData {#constructor-0}
> **PropertyTrackData**()

Creates a new [PropertyTrackData](/vext/ref/fb/propertytrackdata) frostbite instance.

### PropertyTrackData {#constructor-1}
> **PropertyTrackData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PropertyTrackData](/vext/ref/fb/propertytrackdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PropertyTrackData {#constructor-2}
> **PropertyTrackData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropertyTrackData](/vext/ref/fb/propertytrackdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PropertyTrackData](/vext/ref/fb/propertytrackdata). |

## Properties
### {{% prop-heading "id" %}}
> **int**

### {{% prop-heading "times" %}}
> **int**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PropertyTrackData](/vext/ref/fb/propertytrackdata) type.


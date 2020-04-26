---
title: PointEnvelope
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[PointEnvelope](#constructor-0)**() |
| **[PointEnvelope](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PointEnvelope](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "points" >}} | [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PointEnvelope" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PointEnvelope {#constructor-0}
> **PointEnvelope**()

Creates a new [PointEnvelope](/vext/ref/fb/pointenvelope) frostbite instance.

### PointEnvelope {#constructor-1}
> **PointEnvelope**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PointEnvelope](/vext/ref/fb/pointenvelope) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PointEnvelope {#constructor-2}
> **PointEnvelope**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PointEnvelope](/vext/ref/fb/pointenvelope). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PointEnvelope](/vext/ref/fb/pointenvelope). |

## Properties
### {{% prop-heading "points" %}}
> **[PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PointEnvelope](/vext/ref/fb/pointenvelope) type.


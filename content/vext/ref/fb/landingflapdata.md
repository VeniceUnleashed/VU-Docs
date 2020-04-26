---
title: LandingFlapData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[LandingFlapData](#constructor-0)**() |
| **[LandingFlapData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LandingFlapData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "activationHeight" >}} | float |
| {{< prop "heightTolerance" >}} | float |
| {{< prop "activationVelocity" >}} | float |
| {{< prop "velocityTolerance" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LandingFlapData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LandingFlapData {#constructor-0}

> **LandingFlapData**()

Creates a new [LandingFlapData](/vext/ref/fb/landingflapdata) frostbite instance.

### LandingFlapData {#constructor-1}

> **LandingFlapData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LandingFlapData](/vext/ref/fb/landingflapdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LandingFlapData {#constructor-2}

> **LandingFlapData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LandingFlapData](/vext/ref/fb/landingflapdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LandingFlapData](/vext/ref/fb/landingflapdata). |

## Properties

### {{% prop-heading "activationHeight" %}}

> **float**

### {{% prop-heading "heightTolerance" %}}

> **float**

### {{% prop-heading "activationVelocity" %}}

> **float**

### {{% prop-heading "velocityTolerance" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LandingFlapData](/vext/ref/fb/landingflapdata) type.


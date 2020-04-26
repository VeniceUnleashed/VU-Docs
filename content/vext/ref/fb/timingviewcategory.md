---
title: TimingViewCategory
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[TimingViewCategory](#constructor-0)**() |
| **[TimingViewCategory](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TimingViewCategory](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "categoryName" >}} | string |
| {{< prop "keywords" >}} | string[] |
| {{< prop "spuBudget" >}} | float |
| {{< prop "cpuBudget" >}} | float |
| {{< prop "gpuBudget" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TimingViewCategory" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TimingViewCategory {#constructor-0}

> **TimingViewCategory**()

Creates a new [TimingViewCategory](/vext/ref/fb/timingviewcategory) frostbite instance.

### TimingViewCategory {#constructor-1}

> **TimingViewCategory**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TimingViewCategory](/vext/ref/fb/timingviewcategory) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TimingViewCategory {#constructor-2}

> **TimingViewCategory**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TimingViewCategory](/vext/ref/fb/timingviewcategory). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TimingViewCategory](/vext/ref/fb/timingviewcategory). |

## Properties

### {{% prop-heading "categoryName" %}}

> **string**

### {{% prop-heading "keywords" %}}

> **string**[]

### {{% prop-heading "spuBudget" %}}

> **float**

### {{% prop-heading "cpuBudget" %}}

> **float**

### {{% prop-heading "gpuBudget" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TimingViewCategory](/vext/ref/fb/timingviewcategory) type.


---
title: SearchAndDestroyConstantData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[SearchAndDestroyConstantData](#constructor-0)**() |
| **[SearchAndDestroyConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SearchAndDestroyConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SearchAndDestroyConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "timeToWaitMin" >}} | float |
| {{< prop "timeToWaitMax" >}} | float |
| {{< prop "defaultSearchAndDestroyRadius" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SearchAndDestroyConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SearchAndDestroyConstantData {#constructor-0}

> **SearchAndDestroyConstantData**()

Creates a new [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata) frostbite instance.

### SearchAndDestroyConstantData {#constructor-1}

> **SearchAndDestroyConstantData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SearchAndDestroyConstantData {#constructor-2}

> **SearchAndDestroyConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata). |

### SearchAndDestroyConstantData {#constructor-3}

> **SearchAndDestroyConstantData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata). |

## Properties

### {{% prop-heading "timeToWaitMin" %}}

> **float**

### {{% prop-heading "timeToWaitMax" %}}

> **float**

### {{% prop-heading "defaultSearchAndDestroyRadius" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata) type.


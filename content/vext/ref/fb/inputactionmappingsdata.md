---
title: InputActionMappingsData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[InputActionMappingsData](#constructor-0)**() |
| **[InputActionMappingsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[InputActionMappingsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "mappings" >}} | [InputActionMappingData](/vext/ref/fb/inputactionmappingdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InputActionMappingsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InputActionMappingsData {#constructor-0}

> **InputActionMappingsData**()

Creates a new [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata) frostbite instance.

### InputActionMappingsData {#constructor-1}

> **InputActionMappingsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### InputActionMappingsData {#constructor-2}

> **InputActionMappingsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata). |

## Properties

### {{% prop-heading "mappings" %}}

> **[InputActionMappingData](/vext/ref/fb/inputactionmappingdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata) type.


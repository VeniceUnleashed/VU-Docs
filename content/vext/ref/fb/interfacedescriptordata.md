---
title: InterfaceDescriptorData
---

Inherits from [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer)

## Summary

### Constructors

|  |
| --- |
| **[InterfaceDescriptorData](#constructor-0)**() |
| **[InterfaceDescriptorData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[InterfaceDescriptorData](#constructor-2)**(other: [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer)) |
| **[InterfaceDescriptorData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inputEvents" >}} | [DynamicEvent](/vext/ref/fb/dynamicevent)[] |
| {{< prop "outputEvents" >}} | [DynamicEvent](/vext/ref/fb/dynamicevent)[] |
| {{< prop "inputLinks" >}} | [DynamicLink](/vext/ref/fb/dynamiclink)[] |
| {{< prop "outputLinks" >}} | [DynamicLink](/vext/ref/fb/dynamiclink)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InterfaceDescriptorData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InterfaceDescriptorData {#constructor-0}

> **InterfaceDescriptorData**()

Creates a new [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata) frostbite instance.

### InterfaceDescriptorData {#constructor-1}

> **InterfaceDescriptorData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### InterfaceDescriptorData {#constructor-2}

> **InterfaceDescriptorData**(other: [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer))

Casts an instance of type [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer) to [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer) | The instance to cast to [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata). |

### InterfaceDescriptorData {#constructor-3}

> **InterfaceDescriptorData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata). |

## Properties

### {{% prop-heading "inputEvents" %}}

> **[DynamicEvent](/vext/ref/fb/dynamicevent)**[]

### {{% prop-heading "outputEvents" %}}

> **[DynamicEvent](/vext/ref/fb/dynamicevent)**[]

### {{% prop-heading "inputLinks" %}}

> **[DynamicLink](/vext/ref/fb/dynamiclink)**[]

### {{% prop-heading "outputLinks" %}}

> **[DynamicLink](/vext/ref/fb/dynamiclink)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata) type.


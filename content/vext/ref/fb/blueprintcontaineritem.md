---
title: BlueprintContainerItem
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[BlueprintContainerItem](#constructor-0)**() |
| **[BlueprintContainerItem](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BlueprintContainerItem](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "metadata" >}} | [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BlueprintContainerItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BlueprintContainerItem {#constructor-0}

> **BlueprintContainerItem**()

Creates a new [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem) frostbite instance.

### BlueprintContainerItem {#constructor-1}

> **BlueprintContainerItem**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BlueprintContainerItem {#constructor-2}

> **BlueprintContainerItem**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem). |

## Properties

### {{% prop-heading "metadata" %}}

> **[BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem) type.


---
title: BlueprintBundle
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[BlueprintBundle](#constructor-0)**() |
| **[BlueprintBundle](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BlueprintBundle](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[BlueprintBundle](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "blueprint" >}} | [Blueprint](/vext/ref/fb/blueprint) \| nil |
| {{< prop "registryContainer" >}} | [RegistryContainer](/vext/ref/fb/registrycontainer) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BlueprintBundle" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BlueprintBundle {#constructor-0}

> **BlueprintBundle**()

Creates a new [BlueprintBundle](/vext/ref/fb/blueprintbundle) frostbite instance.

### BlueprintBundle {#constructor-1}

> **BlueprintBundle**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BlueprintBundle](/vext/ref/fb/blueprintbundle) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BlueprintBundle {#constructor-2}

> **BlueprintBundle**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [BlueprintBundle](/vext/ref/fb/blueprintbundle). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [BlueprintBundle](/vext/ref/fb/blueprintbundle). |

### BlueprintBundle {#constructor-3}

> **BlueprintBundle**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BlueprintBundle](/vext/ref/fb/blueprintbundle). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BlueprintBundle](/vext/ref/fb/blueprintbundle). |

## Properties

### {{% prop-heading "blueprint" %}}

> **[Blueprint](/vext/ref/fb/blueprint)** \| **nil**

### {{% prop-heading "registryContainer" %}}

> **[RegistryContainer](/vext/ref/fb/registrycontainer)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BlueprintBundle](/vext/ref/fb/blueprintbundle) type.


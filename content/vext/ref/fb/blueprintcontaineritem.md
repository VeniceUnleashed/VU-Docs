---
title: BlueprintContainerItem
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[BlueprintContainerItem](#constructor-0)**() |
| **[BlueprintContainerItem](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[BlueprintContainerItem](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "metadata" >}} | [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BlueprintContainerItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BlueprintContainerItem {#constructor-0}
> **BlueprintContainerItem**()

Creates a new [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem) frostbite instance.

### BlueprintContainerItem {#constructor-1}
> **BlueprintContainerItem**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### BlueprintContainerItem {#constructor-2}
> **BlueprintContainerItem**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem). |

## Properties
### {{% prop-heading "metadata" %}}
> **[BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem) type.


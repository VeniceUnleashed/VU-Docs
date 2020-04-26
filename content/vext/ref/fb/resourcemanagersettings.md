---
title: ResourceManagerSettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[ResourceManagerSettings](#constructor-0)**() |
| **[ResourceManagerSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ResourceManagerSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[ResourceManagerSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "casBundleReadBufferSizeKb" >}} | int |
| {{< prop "casBundleDecompressBufferSizeKb" >}} | int |
| {{< prop "casBundleDecompressBufferCount" >}} | int |
| {{< prop "bundleProfilingEnable" >}} | bool |
| {{< prop "spuDecompressEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ResourceManagerSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ResourceManagerSettings {#constructor-0}
> **ResourceManagerSettings**()

Creates a new [ResourceManagerSettings](/vext/ref/fb/resourcemanagersettings) frostbite instance.

### ResourceManagerSettings {#constructor-1}
> **ResourceManagerSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ResourceManagerSettings](/vext/ref/fb/resourcemanagersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ResourceManagerSettings {#constructor-2}
> **ResourceManagerSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [ResourceManagerSettings](/vext/ref/fb/resourcemanagersettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [ResourceManagerSettings](/vext/ref/fb/resourcemanagersettings). |

### ResourceManagerSettings {#constructor-3}
> **ResourceManagerSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ResourceManagerSettings](/vext/ref/fb/resourcemanagersettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ResourceManagerSettings](/vext/ref/fb/resourcemanagersettings). |

## Properties
### {{% prop-heading "casBundleReadBufferSizeKb" %}}
> **int**

### {{% prop-heading "casBundleDecompressBufferSizeKb" %}}
> **int**

### {{% prop-heading "casBundleDecompressBufferCount" %}}
> **int**

### {{% prop-heading "bundleProfilingEnable" %}}
> **bool**

### {{% prop-heading "spuDecompressEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ResourceManagerSettings](/vext/ref/fb/resourcemanagersettings) type.


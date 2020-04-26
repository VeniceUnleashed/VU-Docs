---
title: LevelReportingAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[LevelReportingAsset](#constructor-0)**() |
| **[LevelReportingAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LevelReportingAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[LevelReportingAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "builtLevels" >}} | [LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LevelReportingAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LevelReportingAsset {#constructor-0}
> **LevelReportingAsset**()

Creates a new [LevelReportingAsset](/vext/ref/fb/levelreportingasset) frostbite instance.

### LevelReportingAsset {#constructor-1}
> **LevelReportingAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LevelReportingAsset](/vext/ref/fb/levelreportingasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LevelReportingAsset {#constructor-2}
> **LevelReportingAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [LevelReportingAsset](/vext/ref/fb/levelreportingasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [LevelReportingAsset](/vext/ref/fb/levelreportingasset). |

### LevelReportingAsset {#constructor-3}
> **LevelReportingAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelReportingAsset](/vext/ref/fb/levelreportingasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LevelReportingAsset](/vext/ref/fb/levelreportingasset). |

## Properties
### {{% prop-heading "builtLevels" %}}
> **[LevelDescriptionAsset](/vext/ref/fb/leveldescriptionasset)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LevelReportingAsset](/vext/ref/fb/levelreportingasset) type.


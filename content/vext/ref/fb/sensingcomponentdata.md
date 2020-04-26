---
title: SensingComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[SensingComponentData](#constructor-0)**() |
| **[SensingComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SensingComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[SensingComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SensingComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SensingComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "template" >}} | [SensingTemplateData](/vext/ref/fb/sensingtemplatedata) \| nil |
| {{< prop "settings" >}} | [SensingSettings](/vext/ref/fb/sensingsettings) \| nil |
| {{< prop "enabled" >}} | bool |
| {{< prop "sharedPlayerMemory" >}} | bool |
| {{< prop "useWeaponTransform" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SensingComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SensingComponentData {#constructor-0}
> **SensingComponentData**()

Creates a new [SensingComponentData](/vext/ref/fb/sensingcomponentdata) frostbite instance.

### SensingComponentData {#constructor-1}
> **SensingComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SensingComponentData](/vext/ref/fb/sensingcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SensingComponentData {#constructor-2}
> **SensingComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [SensingComponentData](/vext/ref/fb/sensingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [SensingComponentData](/vext/ref/fb/sensingcomponentdata). |

### SensingComponentData {#constructor-3}
> **SensingComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SensingComponentData](/vext/ref/fb/sensingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SensingComponentData](/vext/ref/fb/sensingcomponentdata). |

### SensingComponentData {#constructor-4}
> **SensingComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SensingComponentData](/vext/ref/fb/sensingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SensingComponentData](/vext/ref/fb/sensingcomponentdata). |

### SensingComponentData {#constructor-5}
> **SensingComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SensingComponentData](/vext/ref/fb/sensingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SensingComponentData](/vext/ref/fb/sensingcomponentdata). |

## Properties
### {{% prop-heading "template" %}}
> **[SensingTemplateData](/vext/ref/fb/sensingtemplatedata)** | **nil**

### {{% prop-heading "settings" %}}
> **[SensingSettings](/vext/ref/fb/sensingsettings)** | **nil**

### {{% prop-heading "enabled" %}}
> **bool**

### {{% prop-heading "sharedPlayerMemory" %}}
> **bool**

### {{% prop-heading "useWeaponTransform" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SensingComponentData](/vext/ref/fb/sensingcomponentdata) type.


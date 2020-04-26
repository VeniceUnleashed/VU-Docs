---
title: SensingTemplateData
---

Inherits from 
[GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata)

## Summary
### Constructors
| |
| ----------- |
| **[SensingTemplateData](#constructor-0)**() |
| **[SensingTemplateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SensingTemplateData](#constructor-2)**(other: [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata)) |
| **[SensingTemplateData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SensingTemplateData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "awareForgetTime" >}} | float |
| {{< prop "lostForgetTime" >}} | float |
| {{< prop "timeUntilUnseenIsLost" >}} | float |
| {{< prop "maximumMergeDistance" >}} | float |
| {{< prop "maximumAlertDistance" >}} | float |
| {{< prop "maximumReadinessRaiseDistance" >}} | float |
| {{< prop "readyLimits" >}} | [SensingLimits](/vext/ref/fb/sensinglimits) |
| {{< prop "relaxedLimits" >}} | [SensingLimits](/vext/ref/fb/sensinglimits) |
| {{< prop "debugText" >}} | string |
| {{< prop "combatLimits" >}} | [SensingLimits](/vext/ref/fb/sensinglimits) |
| {{< prop "useSenseSharing" >}} | bool |
| {{< prop "noticeBullets" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SensingTemplateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SensingTemplateData {#constructor-0}
> **SensingTemplateData**()

Creates a new [SensingTemplateData](/vext/ref/fb/sensingtemplatedata) frostbite instance.

### SensingTemplateData {#constructor-1}
> **SensingTemplateData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SensingTemplateData](/vext/ref/fb/sensingtemplatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SensingTemplateData {#constructor-2}
> **SensingTemplateData**(other: [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata))

Casts an instance of type [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata) to [SensingTemplateData](/vext/ref/fb/sensingtemplatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata) | The instance to cast to [SensingTemplateData](/vext/ref/fb/sensingtemplatedata). |

### SensingTemplateData {#constructor-3}
> **SensingTemplateData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SensingTemplateData](/vext/ref/fb/sensingtemplatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SensingTemplateData](/vext/ref/fb/sensingtemplatedata). |

### SensingTemplateData {#constructor-4}
> **SensingTemplateData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SensingTemplateData](/vext/ref/fb/sensingtemplatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SensingTemplateData](/vext/ref/fb/sensingtemplatedata). |

## Properties
### {{% prop-heading "awareForgetTime" %}}
> **float**

### {{% prop-heading "lostForgetTime" %}}
> **float**

### {{% prop-heading "timeUntilUnseenIsLost" %}}
> **float**

### {{% prop-heading "maximumMergeDistance" %}}
> **float**

### {{% prop-heading "maximumAlertDistance" %}}
> **float**

### {{% prop-heading "maximumReadinessRaiseDistance" %}}
> **float**

### {{% prop-heading "readyLimits" %}}
> **[SensingLimits](/vext/ref/fb/sensinglimits)**

### {{% prop-heading "relaxedLimits" %}}
> **[SensingLimits](/vext/ref/fb/sensinglimits)**

### {{% prop-heading "debugText" %}}
> **string**

### {{% prop-heading "combatLimits" %}}
> **[SensingLimits](/vext/ref/fb/sensinglimits)**

### {{% prop-heading "useSenseSharing" %}}
> **bool**

### {{% prop-heading "noticeBullets" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SensingTemplateData](/vext/ref/fb/sensingtemplatedata) type.

